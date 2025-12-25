import CardLeft from './components/card-left/cardLeft';
import CardRight from './components/card-right/cardRight';

type Props = {
  className: string;
};

function SectionBottom({ className }: Props) {
  return (
    <div className={className}>
      <CardLeft />
      <CardRight />
    </div>
  );
}

export default SectionBottom;
