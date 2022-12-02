import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <header>
        <div className='headerLeft'>
          <h2>Интерьер.</h2>
        </div>
        <div>
          <ul className='headerRight'>
            <li>Каталог</li>
            <li>Корзина</li>
          </ul>
        </div>
      </header>
      <div className='content'>
        <div className='content__top'>
          <div className='sort'>
            <div className='sort__label'>
              <p>Порядок:</p>
              <span>сперва дешевле</span>
              <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8.09753L0.339745 0.45119L17.6603 0.451192L9 8.09753Z" fill="black" />
              </svg>
            </div>
          </div>
        </div>
        <div className='content__items'>
          <div className='card'>
            <img width={379} height={250} src='/img/1.jpg' alt='photo1' />
            <h3>Кровать TATRAN</h3>
            <p>Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.</p>
            <b>120 000 руб.</b>
          </div>
          <div className='card'>
            <img width={379} height={250} src='/img/2.jpg' alt='photo2' />
            <h3>Кресло VILORA</h3>
            <p>Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. </p>
            <b>21 000 руб.</b>
          </div>
          <div className='card'>
            <img width={379} height={250} src='/img/3.jpg' alt='photo3' />
            <h3>Стол MENU</h3>
            <p>Европейский дуб - отличается особой прочностью и стабильностью.</p>
            <b>34 000 руб.</b>
          </div>
          <div className='card'>
            <img width={379} height={250} src='/img/4.jpg' alt='photo4' />
            <h3>Диван ASKESTA</h3>
            <p>Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать</p>
            <b>68 000 руб.</b>
          </div>
          <div className='card'>
            <img width={379} height={250} src='/img/5.jpg' alt='photo5' />
            <h3>Кресло LUNAR</h3>
            <p>Прекрасно переносит солнечные лучи, перепады влажности и любые осадки</p>
            <b>40 000 руб.</b>
          </div>
          <div className='card'>
            <img width={379} height={250} src='/img/6.jpg' alt='photo6' />
            <h3>Шкаф Nastan</h3>
            <p>Мебель может быть оснащена разнообразными системами подсветки.</p>
            <b>80 000 руб.</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
