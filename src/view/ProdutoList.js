import React from 'react';


export class ProdutoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.id} : {item.nome} - {item.quantidade}</li>
          ))}
        </ul>
      );
    }
}
