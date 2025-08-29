import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store'
import { addToCart, removeFromCart, updateQuantity, clearCart, toggleCart, openCart, closeCart } from '@/lib/features/cartSlice'

export const useCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart)

  const handleAddToCart = (product: {
    id: string // This will be the product ID
    name: string
    price: number
    image?: string
    category: string
    size?: string
    sku: string
    quantity?: number
  }) => {
    // Add productId field and keep id as the original product ID for the cart slice
    const cartProduct = {
      ...product,
      productId: product.id, // Store original product ID
    }
    dispatch(addToCart(cartProduct))
    
    // Auto-open cart sidebar for immediate feedback (Amazon-style)
    setTimeout(() => {
      dispatch(openCart())
    }, 100)
  }

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id))
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleToggleCart = () => {
    dispatch(toggleCart())
  }

  const handleOpenCart = () => {
    dispatch(openCart())
  }

  const handleCloseCart = () => {
    dispatch(closeCart())
  }

  return {
    ...cart,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    updateQuantity: handleUpdateQuantity,
    clearCart: handleClearCart,
    toggleCart: handleToggleCart,
    openCart: handleOpenCart,
    closeCart: handleCloseCart,
  }
}
