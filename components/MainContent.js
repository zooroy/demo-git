import { connect } from 'react-redux';

const MainContent = props => {
  const css = bg => {
    return (
      <style jsx>{`
        .container {
          height: 90vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: ${bg || '#eee'};
        }
      `}</style>
    );
  };

  return (
    <div className="container">
      {css(props.changeBG)}
      {props.content}
    </div>
  );
};

export default connect()(MainContent);
