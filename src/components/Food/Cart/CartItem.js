import React, { useContext } from 'react';
import styles from './CartItem.module.scss';
import CartContext from '../../Store/cart-context';

const CartItem = ({ cart }) => {
  const { id, name, price, amount } = cart;

  const {
    'cart-item': cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;

  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  const { addItem, removeItem } = useContext(CartContext);

  // + 버튼을 누르면 무조건 amount는 한개
  const cartAddItemHandler = () => {
    // addItem은 앞에서 작성한 담기 기능에 사용한 함수이다
    // 지금은 항목 추가가 아닌 기존 항목의 수량만 하나 늘리는 것이다
    addItem({ ...cart, amount: 1 });
  };

  const cartRemoveItemHandler = () => {
    removeItem(id);
  };

  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}>x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button onClick={cartRemoveItemHandler}>-</button>
        <button onClick={cartAddItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
