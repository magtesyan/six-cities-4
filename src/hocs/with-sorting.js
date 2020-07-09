import React, {PureComponent} from 'react';

const withSorting = (Component) => {
  class WithSorting extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {

      };
    }

    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }
  }

  return WithSorting;
};

export default withSorting;
