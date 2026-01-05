import { twMerge } from 'tailwind-merge'

type Variant = 'primary' | 'secondary'

const Button = ({
  variant = 'primary',
  children,
}: {
  variant?: Variant
  children: React.ReactNode
}) => {
  return (
    <button
      className={twMerge(
        'uppercase text-[0.8rem] font-medium text-foreground bg-background text-foreground py-3 px-6',
        variant === 'secondary' && 'bg-foreground text-background'
      )}
    >
      {children}
    </button>
  )
}

export default Button
