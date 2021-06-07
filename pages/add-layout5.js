import Layout from '../components/Layout';
import { connect, useSelector, useDispatch } from 'react-redux';
import { changeName, changeBG } from '../redux/actions';
import { useCallback } from 'react';
import { getApiData } from '../redux/actions';

const Page = props => {
  const selector_bg = useSelector(state => state.changeBG);
  const selector_text = useSelector(state => state.changeText);
  const dispatch = useDispatch();

  // console.log('dispatch', dispatch);
  const css = () => {
    return (
      <style jsx>{`
        .wrap {
          display: flex;
        }
        .wrap-block {
          margin: 15px;
          border: 2px solid #999;
          border-radius: 5px;
          padding: 15px;
        }
        .title {
          font-size: 20px;
          margin-bottom: 10px;
        }
        .colors-wraps {
          display: flex;
        }
        .block {
          width: 40px;
          height: 40px;
          border-radius: 3px;
          margin: 0 5px;
          cursor: pointer;
        }
        input {
          width: 100%;
          padding: 8px 10px;
          border: none;
          border-radius: 3px;
        }
        button {
          width: 100%;
          border: none;
          background: #3a8cf4;
          margin-top: 10px;
          border-radius: 3px;
          padding: 5px;
          color: #fff;
          cursor: pointer;
          transition: 0.3s;
        }
        button:hover {
          background: #80b1ed;
        }
      `}</style>
    );
  };

  const colors = [
    { color: '#ee8694', colorName: '紅色' },
    { color: '#fff391', colorName: '藍色' },
    { color: '#bedd9a', colorName: '綠色' },
    { color: '#c2eafc', colorName: '綠色' },
  ];

  const callbackToRender = useCallback(arg =>
    dispatch(() => dispatch(changeBG(arg)), [dispatch])
  );
  return (
    <Layout changeBG={selector_bg}>
      {css()}
      <h1>{selector_text}</h1>
      <button onClick={() => getApiData(dispatch)}>請求api</button>
      <div className="wrap">
        <div className="wrap-block">
          <div className="title">輸入顯示在首頁的標題</div>
          <input
            type="text"
            onChange={e => dispatch(changeName(e.target.value))}
            // onChange={e =>
            //   dispatch({ type: 'CHANGE_TEXT', text: e.target.value })
            // }
            // onChange={e => dispatch(changeName(e.target.value))}
            // onChange={e => props.changeName(e.target.value)}
            value={selector_text}
          />
          {/* <button onClick={() => props.changeName(input)}>提交</button> */}
        </div>
        <div className="wrap-block">
          <div className="title">選擇首頁背景顏色</div>
          <div className="colors-wraps">
            {colors.map(item => (
              <div
                className="block"
                style={{
                  background: item.color,
                }}
                onClick={() => callbackToRender(item.color)}
                // onClick={() =>
                //   useCallback(() =>
                //     dispatch(() => dispatch(changeBG(item.color)), [dispatch])
                //   )
                // }
                // onClick={() => dispatch(changeBG(item.color))}
                // onClick={() => props.changeBG(item.color)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// export default connect(state => ({ changeText: state.changeText }), {
//   changeName,
//   changeBG,
// })(Page);

export default Page;
