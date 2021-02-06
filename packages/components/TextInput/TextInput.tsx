import React from 'react';
import styles from './TextInput.module.css';
import { TextField } from '@fluentui/react';

type Props = { 
  onUserInput: (value: string) => void, 
  onSubmit: (value: string) => void,
  customClassName?: string
  placeholder: string
};
type State = {  };

export class TextInput extends React.Component<Props,State>
{
  constructor(props: Props) {
    super(props);
    this._onChangeHandler = this._onChangeHandler.bind(this);
    this._keyPressHandler = this._keyPressHandler.bind(this);
  }
  _keyPressHandler(event:  React.KeyboardEvent<HTMLInputElement| HTMLTextAreaElement>) {
    if(event.nativeEvent.key === 'Enter') {
      this.props.onSubmit(event.nativeEvent.target.defaultValue);
    }
  }
  _onChangeHandler(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) {
    if(newValue!=undefined) {
      this.props.onUserInput(newValue);
    }
  }
  render(){
    return (
      <TextField
      placeholder = {this.props.placeholder}
      className={this.props.customClassName}
      onChange={this._onChangeHandler}
      onKeyDown={this._keyPressHandler}
      />
    );
  }

} 