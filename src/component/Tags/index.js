import {Button, List} from './styled'

const Tags = props => {
  const {each, onChangeActiveTab, activeTab, tab} = props
  const onClickButton = () => {
    onChangeActiveTab(each.optionId)
  }

  return (
    <List>
      <Button
        type="button"
        show={each.optionId === activeTab}
        onClick={onClickButton}
      >
        {each.displayText}
      </Button>
    </List>
  )
}

export default Tags
