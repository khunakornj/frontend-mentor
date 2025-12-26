import ButtonMain from '@/shared/components/button-main/buttonMain';
import ButtonSide from '@/shared/components/button-side/buttonSide';

function IndexPage() {
  return (
    <div
      style={{
        width: '200px',
      }}
    >
      <ButtonMain buttonType="primary" label="I Know This" />
      <ButtonSide label="I Know This" />
    </div>
  );
}

export default IndexPage;
