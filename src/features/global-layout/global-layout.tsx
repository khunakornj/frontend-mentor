import style from './global-layout.module.css';
import IconHeading from './icon-heading/icon-heading';

type Props = React.ComponentProps<'div'>;

function GlobalLayout({ children, ...props }: Props) {
  return (
    <div className={style.root} {...props}>
      <IconHeading />
      {children}
    </div>
  );
}

export default GlobalLayout;
