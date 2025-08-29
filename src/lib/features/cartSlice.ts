import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string // Unique cart item ID (productId-sku)
  productId: string // Original product ID
  name: string
  price: number
  quantity: number
  image?: string
  category: string
  size?: string
  sku: string
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
  isOpen: boolean
}

// Load cart from localStorage if available
const loadCartFromStorage = (): CartState => {
  if (typeof window !== 'undefined') {
    try {
      const savedCart = localStorage.getItem('tso-cart')
      if (savedCart) {
        const parsed = JSON.parse(savedCart)
        return {
          ...parsed,
          total: calculateTotal(parsed.items || []),
          itemCount: calculateItemCount(parsed.items || []),
          isOpen: false // Always start with cart closed
        }
      }
    } catch (error) {
      console.warn('Failed to load cart from localStorage:', error)
    }
  }
  return {
    items: [],
    total: 0,
    itemCount: 0,
    isOpen: false,
  }
}

// Save cart to localStorage
const saveCartToStorage = (state: CartState) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('tso-cart', JSON.stringify({
        items: state.items,
        total: state.total,
        itemCount: state.itemCount
      }))
    } catch (error) {
      console.warn('Failed to save cart to localStorage:', error)
    }
  }
}

const initialState: CartState = loadCartFromStorage()

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
}

const calculateItemCount = (items: CartItem[]) => {
  return items.reduce((count, item) => count + item.quantity, 0)
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'> & { quantity?: number }>) => {
      // Create unique identifier using product ID + variant SKU to handle different sizes/variants
      const uniqueId = `${action.payload.id}-${action.payload.sku}`
      const existingItem = state.items.find(item => 
        item.productId === action.payload.id && item.sku === action.payload.sku
      )
      
      const quantityToAdd = action.payload.quantity || 1
      
      if (existingItem) {
        existingItem.quantity += quantityToAdd
      } else {
        state.items.push({ 
          ...action.payload,
          id: uniqueId, // Use unique ID for cart item
          productId: action.payload.id, // Store original product ID
          quantity: quantityToAdd 
        })
      }
      
      state.total = calculateTotal(state.items)
      state.itemCount = calculateItemCount(state.items)
      saveCartToStorage(state)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.total = calculateTotal(state.items)
      state.itemCount = calculateItemCount(state.items)
      saveCartToStorage(state)
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== action.payload.id)
        } else {
          item.quantity = Math.min(99, Math.max(1, action.payload.quantity)) // Amazon-style limits
        }
      }
      state.total = calculateTotal(state.items)
      state.itemCount = calculateItemCount(state.items)
      saveCartToStorage(state)
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
      state.itemCount = 0
      saveCartToStorage(state)
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = cartSlice.actions

export default cartSlice.reducer
