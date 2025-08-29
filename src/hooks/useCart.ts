import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store'
import { addToCart, removeFromCart, updateQuantity, clearCart, toggleCart, openCart, closeCart } from '@/lib/features/cartSlice'

export const useCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart)

  const handleAddToCart = (product: {
    id: string
    name: string
    price: number
    image?: string
    category: string
    size?: string
    sku: string
  }) => {
    dispatch(addToCart(product))
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
