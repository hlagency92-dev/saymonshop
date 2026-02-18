import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { CheckCircle, CreditCard, Truck, MapPin } from 'lucide-react'

const Checkout = () => {
  const navigate = useNavigate()
  const { items, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: ''
  })

  const shipping = totalPrice >= 200 ? 0 : 30
  const finalTotal = totalPrice + shipping

  if (items.length === 0 && step !== 'success') {
    navigate('/')
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 'info') {
      setStep('payment')
    } else if (step === 'payment') {
      clearCart()
      setStep('success')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-16 h-16 text-white" />
          </motion.div>

          <h2 className="text-3xl font-bold mb-4">Commande confirmée !</h2>

          <p className="text-gray-400 mb-8">
            Merci pour votre commande. Vous recevrez un email de confirmation sous peu.
          </p>

          <div className="space-y-3">
            <button
              onClick={() => navigate('/')}
              className="w-full btn-primary"
            >
              Retour à l'accueil
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full btn-secondary"
            >
              Continuer mes achats
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Finaliser la commande</h1>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className={`flex items-center gap-2 ${step === 'info' ? 'text-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step === 'info' ? 'border-primary bg-primary/10' : 'border-gray-600'
                }`}>
                  1
                </div>
                <span className="hidden sm:inline font-semibold">Informations</span>
              </div>

              <div className="h-px w-16 bg-gray-700" />

              <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step === 'payment' ? 'border-primary bg-primary/10' : 'border-gray-600'
                }`}>
                  2
                </div>
                <span className="hidden sm:inline font-semibold">Paiement</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {step === 'info' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-card border border-border rounded-xl p-6 space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-primary" />
                      <h2 className="text-xl font-bold">Informations de livraison</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Adresse *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="input-field"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Ville *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="input-field"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Code postal
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Notes de commande (optionnel)
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        className="input-field resize-none"
                        placeholder="Instructions spéciales pour la livraison..."
                      />
                    </div>

                    <button type="submit" className="w-full btn-primary">
                      Continuer vers le paiement
                    </button>
                  </motion.div>
                )}

                {step === 'payment' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-card border border-border rounded-xl p-6 space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-6 h-6 text-primary" />
                      <h2 className="text-xl font-bold">Méthode de paiement</h2>
                    </div>

                    <div className="space-y-4">
                      <label className="flex items-start gap-3 p-4 border-2 border-primary rounded-lg cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          defaultChecked
                          className="mt-1 accent-primary"
                        />
                        <div>
                          <p className="font-semibold mb-1">Paiement à la livraison</p>
                          <p className="text-sm text-gray-400">
                            Payez en espèces lors de la réception de votre commande
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start gap-3 p-4 border-2 border-gray-700 rounded-lg cursor-pointer opacity-50">
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          disabled
                          className="mt-1"
                        />
                        <div>
                          <p className="font-semibold mb-1">Carte bancaire</p>
                          <p className="text-sm text-gray-400">
                            Bientôt disponible
                          </p>
                        </div>
                      </label>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold mb-3">Résumé de livraison</h3>
                      <div className="space-y-2 text-sm text-gray-300">
                        <p><span className="text-gray-400">Nom:</span> {formData.firstName} {formData.lastName}</p>
                        <p><span className="text-gray-400">Email:</span> {formData.email}</p>
                        <p><span className="text-gray-400">Téléphone:</span> {formData.phone}</p>
                        <p><span className="text-gray-400">Adresse:</span> {formData.address}, {formData.city}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep('info')}
                        className="flex-1 btn-secondary"
                      >
                        Retour
                      </button>
                      <button type="submit" className="flex-1 btn-primary">
                        Confirmer la commande
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Résumé de la commande</h2>

                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/80x80/1a1a1a/666666?text=No+Image'
                          }}
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-semibold line-clamp-2">{item.name}</p>
                        <p className="text-xs text-gray-400">Quantité: {item.quantity}</p>
                        <p className="text-sm text-primary font-semibold">
                          {(item.price * item.quantity).toFixed(2)} د.م
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4 space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Sous-total</span>
                    <span>{totalPrice.toFixed(2)} د.م</span>
                  </div>

                  <div className="flex justify-between text-gray-300">
                    <span>Livraison</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-500 font-semibold">Gratuite</span>
                      ) : (
                        `${shipping.toFixed(2)} د.م`
                      )}
                    </span>
                  </div>

                  <div className="border-t border-gray-700 pt-3">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">{finalTotal.toFixed(2)} د.م</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 p-3 bg-primary/10 border border-primary/30 rounded-lg">
                  <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300">
                    Livraison estimée sous 3-5 jours ouvrables
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Checkout
