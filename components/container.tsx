type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="mx-auto w-full Index-page">{children}</div>
}

export default Container
