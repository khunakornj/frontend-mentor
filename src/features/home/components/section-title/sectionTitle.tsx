import style from './sectionTitle.module.css';

type Props = {
  className: string;
};

function SectionTitle({ className }: Props) {
  return (
    <div className={className}>
      <h2 className={style.helloText}>Hello, Lisa!</h2>
      <h3 className={style.feelingText}>How are you feeling today?</h3>
      <p className={style.dateText}>Wednesday, April 16th, 2025</p>
    </div>
  );
}

export default SectionTitle;
