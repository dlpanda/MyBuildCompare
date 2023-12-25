type GradientButtonProps = {
  text: string;
  className?: string;
};

export default function GradientButton(props: GradientButtonProps) {
  return (
    <div className={`button green-gradient ${props.className}`}>
      {props.text}
    </div>
  );
}
