import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <ShopingCart />
      <Product />
    </div>
  );
});

export const ShopingCart = component$(() => {
  const cart = useStore(
    {
      items: [] as string[],
    },
    { recursive: true }
  );
  return (
    <div
      document:onAdditem$={(e) => {
        console.log(e.detail);
        cart.items.push(e.detail);
      }}
    >
      <h2>items</h2>
      <ul>
        {cart.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export const Product = component$(() => {
  return (
    <div>
      <h2>Product</h2>
      <button
        onClick$={(e) =>
          e.target!.dispatchEvent(
            new CustomEvent<any>('additem', { detail: 'A' })
          )
        }
      >
        Add A
      </button>
      <button
        onClick$={(e) =>
          e.target!.dispatchEvent(
            new CustomEvent<any>('additem', { detail: 'B' })
          )
        }
      >
        Add B
      </button>
    </div>
  );
});
