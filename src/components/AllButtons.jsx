import React, { Component } from 'react';
import Button from './Button';

import "../App.css";

export default class AllButtons extends Component {
  render() {
    return(
      <section>
        <Button
          name="numero"
          id="numero"
          onClick={ this.handleClick }
          numValue="1"
          className="c"
        />
        <Button
          name="numero"
          id="numero"
          onClick={ this.handleClick }
          numValue="2"
        />
        <Button
          name="numero"
          id="numero"
          onClick={ this.handleClick }
          numValue="3"
        />
        <Button
          name="numero"
          id="numero"
          onClick={ this.handleClick }
          numValue="4"
        />
        <Button
          name="numero"
          id="numero"
          onClick={ this.handleClick }
          numValue="5"
        />
        <Button
          name="numero"
          id="numero"
          onClick={ this.handleClick }
          numValue="6"
        />
        <Button
          name="numero"
          id="numero"
          onClick={ this.handleClick }
          numValue="7"
        />
        <Button
          name="numero"
          id="numero"
          onClick={ this.handleClick }
          numValue="8"
        />
        <Button
          name="numero"
          id="numero"
          onClick={ this.handleClick }
          numValue="9"
        />
        <Button
          name="numero"
          id="numero"
          onClick={ this.handleClick }
          numValue="0"
        />
      </section>
    )
  }
}