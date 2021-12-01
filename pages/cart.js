import Head from 'next/head'
import ItemCard from '../components/ItemCard'
import { useUser } from '../context/UserContext'

export default function Checkout() {
  const { user, setUser } = useUser()

  const sum = user.cart.reduce((result, number) => result + number.price, 0);

  return (
    <div>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 class="cartcolor">{user.name}, let's checkout!</h1>
        <p class="cartcolor">You have {user.cart.length} items in your cart.</p>
        <div class="checkout">
          {/* TODO: Style the checkout page so the cart maps through
            * to a component for each item in the cart
          */
            user.cart.map((item) => (
              <ItemCard name={user.cart.name} img={user.cart.img} stock={user.cart.stock} price={user.cart.price} />
            ))
          }
        </div>
        <h2 class="total cartcolor">Total: ${sum}</h2>
      </main>
    </div>
  )
}
