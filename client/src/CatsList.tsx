import React, { ReactElement } from 'react';
import './CatsList.css';

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

type CatsResponse = {
  data: Array<Cat>;
};

class CatsList extends React.Component<Record<string, unknown>, IState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  async componentDidMount(): Promise<void> {
    try {
      const res = await fetch('/cats');
      const result: CatsResponse = (await res.json()) as CatsResponse;
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
    return;
  }

  render(): ReactElement {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div className='CatsList'>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className='CatsList'>Loading ...</div>;
    } else {
      return (
        <div className='CatsList'>
          <h2 className='CatsList-Section-Header'>Cats</h2>
          <table className='CatsList-Table'>
            <thead className='CatsList-Table-Header'>
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
