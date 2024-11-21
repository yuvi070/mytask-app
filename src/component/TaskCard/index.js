import {Card, CardPara, CardTag} from './styled'

const TaskCard = props => {
  const {each} = props
  return (
    <Card>
      <CardPara>{each.task}</CardPara>
      <CardTag>{each.option}</CardTag>
    </Card>
  )
}

export default TaskCard
