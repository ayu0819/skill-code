import React from 'react';
import ReactDOM from 'react-dom'
import Language from './Language';

class App extends React.Component {
    render() {
      const languageList = [
        {
          name: 'HTML & CSS',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
        },
        {
          name: 'JavaScript',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
        },
        {
          name: 'React',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
        },
        {
          name: 'Ruby',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
        },
        {
          name: 'Ruby on Rails',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
        },
        {
          name: 'Python',
          image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
        }
      ];
  
      return (
        <div className="container mt-5">
          <h2 className="mt-5">言語一覧</h2>
          <div className='language my-4'>
            {/* 以下のコードを削除してください */}
            {/* ここまで */}
            {/* mapメソッドを用いて、Languageコンポーネントを表示してください */}
            {languageList.map((languageItem) => {
              return (
                // Languageコンポーネントを呼び出し、その中でpropsを渡してください
                <Language 
                  name={languageItem.name}
                  image={languageItem.image}
                  introduction={languageItem.introduction}
                />
                
              )
            })}
          </div>
        </div>
      );
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <App />,
      document.getElementById('welcome'),
    )
  })
  
  
  export default App;
  