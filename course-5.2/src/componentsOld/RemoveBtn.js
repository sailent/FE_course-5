import { setValue } from 'react';

function RemoveItem({ object, id }) {
  setValue(object.filter((obj) => obj.id !== id));
}
export default RemoveItem;
