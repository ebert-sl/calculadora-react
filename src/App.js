import Button from './components/Button'
import Input from './components/Input'
import { Container, Content, Row } from './styles'
import { useState } from 'react'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }
  const handleBackspace = () => {
    if (currentNumber !== '') {
      const numberSplit = currentNumber.split("")
      numberSplit.pop()
      const newNumber = numberSplit.join("")
      setCurrentNumber(newNumber)
    }
  }
  const handleClear = () => {
    setFirstNumber(currentNumber)
    setCurrentNumber('0')
  }
  const handleOnFullClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  const handlePlusMinus = () => {
    const splittedNumber = currentNumber.split('')
    const checkSign = splittedNumber[0]
    if (checkSign === '-') {
      splittedNumber.shift()
      const newNumber = splittedNumber.join('')
      setCurrentNumber(newNumber)
    } else {
      setCurrentNumber("-" + currentNumber)
    }
  }
  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setFirstNumber(String(sum))
    }
  }
  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setFirstNumber(String(sub))
    }
  }
  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setFirstNumber(String(mult))
    }
  }
  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div))
      setFirstNumber(String(div))
    }
  }
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      switch(operation) {
        case '+':
          handleSumNumbers()
          setOperation('')
          break
        case '-':
          handleSubNumbers()
          setOperation('')
          break
        case '*':
          handleMultNumbers()
          setOperation('')
          break
        case '/':
          handleDivNumbers()
          setOperation('')
          break
        default:
          break
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="CE" onClick={handleClear}/>
          <Button label="C" onClick={handleOnFullClear}/>
          <Button label="X" onClick={handleBackspace}/>
          <Button label="/" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="*" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="±" onClick={handlePlusMinus}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App
