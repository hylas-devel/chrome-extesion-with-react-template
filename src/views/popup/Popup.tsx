import { Button } from "@nextui-org/react"
import { useImmer } from "use-immer"

export function Popup() {
  let [value, updateValue] = useImmer(1)
  return (
    <>
      <div>{value}</div>
      <Button
        onClick={event => {
          updateValue(draft => draft + 1)
          updateValue(draft => draft + 1)
        }}
      />
    </>
  )
}
