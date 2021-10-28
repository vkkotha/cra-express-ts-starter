import React, { ReactElement } from 'react';
import './CatsList.css';

interface IProps {}

interface IState {
  error?: Error;
  isLoaded: boolean;
  items: Array<Cat>;
}

type Cat = {
  id: number;
  name: string;
  size: string;
};

class CatsList extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch('/cats');
      const result = await res.json();
      const cats: Cat[] = result.data;
      this.setState({
        isLoaded: true,
        items: cats,
      });
    } catch (e) {
      this.setState({
        isLoaded: false,
        error: e as Error,
      });
    }
    fetch('/cats')
      .then((res) => res.json())
      .then(
        (payload) => console.log(payload.data),
        (err) => {
          console.log(err);
        }
      );
  }

  render(): ReactElement {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div className="CatsList">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="CatsList">Loading ...</div>;
    } else {
      return (
        <div className="CatsList">
          <h2 className="CatsList-Group-Header">Cats</h2>
          <table className="CatsList-Table">
            <thead className="CatsList-Table-Header">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {items.map((cat: Cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
                  <td>{cat.name}</td>
                  <td>{cat.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default CatsList;
