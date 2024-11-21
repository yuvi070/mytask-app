import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Tags from '../Tags'
import TaskCard from '../TaskCard'
import {
  Main,
  Body,
  LeftDiv,
  RightDiv,
  MainHeading,
  Form,
  Label,
  Input,
  Select,
  InputDiv,
  ButtonDiv,
  Button,
  SubHeading,
  TagsDiv,
  TaskDiv,
  NoTaskDiv,
} from './styled'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {
    activeTab: '',
    tab: false,
    TaskList: [],
    input: '',
    option: 'HEALTH',
  }

  onChangeActiveTab = id => {
    this.setState(prev => ({activeTab: id, tab: !prev.tab}))
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onChangeOption = event => {
    this.setState({option: event.target.value})
  }

  onClickButton = event => {
    event.preventDefault()
    const {input, option} = this.state
    const newTask = {id: uuidv4(), task: input, option}
    this.setState(prev => ({
      TaskList: [...prev.TaskList, newTask],
      input: '',
    }))
  }

  render() {
    const {TaskList, input, activeTab, tab} = this.state
    const filterData = TaskList.filter(each => each.option === activeTab)
    const renderList = tab ? filterData : TaskList
    return (
      <Main>
        <Body>
          <LeftDiv>
            <MainHeading>Create a task!</MainHeading>
            <Form onSubmit={this.onClickButton}>
              <InputDiv>
                <Label htmlFor="task">Task</Label>
                <Input
                  placeholder="Enter the task here"
                  type="text"
                  id="task"
                  value={input}
                  onChange={this.onChangeInput}
                />
              </InputDiv>
              <InputDiv>
                <Label htmlFor="tags">Tags</Label>
                <br />
                <Select id="tags" onChange={this.onChangeOption}>
                  {tagsList.map(each => (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </Select>
              </InputDiv>
              <ButtonDiv>
                <Button type="submit">Add Task</Button>
              </ButtonDiv>
            </Form>
          </LeftDiv>
          <RightDiv>
            <SubHeading>Tags</SubHeading>
            <TagsDiv as="ul">
              {tagsList.map(each => (
                <Tags
                  key={each.optionId}
                  onChangeActiveTab={this.onChangeActiveTab}
                  each={each}
                  activeTab={tab ? activeTab : ''}
                  tab={tab}
                />
              ))}
            </TagsDiv>
            <SubHeading>Tasks</SubHeading>

            {renderList.length === 0 ? (
              <NoTaskDiv>
                <p>No Tasks Added Yet</p>
              </NoTaskDiv>
            ) : (
              <TaskDiv>
                {renderList.map(each => (
                  <TaskCard each={each} key={each.id} />
                ))}
              </TaskDiv>
            )}
          </RightDiv>
        </Body>
      </Main>
    )
  }
}

export default Home
