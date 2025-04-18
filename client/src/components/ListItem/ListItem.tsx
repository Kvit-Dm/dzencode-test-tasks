import { products } from '@/app';
import * as Types from '@/types';

type Props = {
  data?: Types.Product; // <-- data is optional here
  key?: number;
};

export default function ListItem({ ...props }: Props) {
  return (
    props.data && (
      <div key={props.key} className="products-list-item">
        <div>{props.data?.isNew}</div>
        <div>{props.data?.title}</div>
        <div>{props.data?.title}</div>
      </div>
    )
  );
}
