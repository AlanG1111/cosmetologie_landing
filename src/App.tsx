import React from "react";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main-bg'>preview with CTA</div>
      <div className='main-container colored-container'>
        <div>
          Вітаємо на сайті лікаря-косметолога Тані Шлаган Я допоможу Вам: –
          скоригувати вікові зміни шкіри; – позбутися пігментних плям, акне,
          постакне; – покращити контур обличчя; – зробити шкіру більш
          зволоженою, еластичною та здоровою. В моєму кабінеті Ви знайдете
          широкий спектр косметологічних послуг, які допоможуть Вам досягти
          бажаного результату: – ін’єкційні (ботулінотерапія, мезотерапія,
          біоревіталізація, контурна пластика губ, бланшування); – апаратні
          (RF-ліфтинг, неінвазивна мезотерапія (електропорація),
          карбоксітерапія, ультразвукова чистка, фонофорез, мікрострумова
          терапія, мікродермабразія, фракційна мезотерапія); – естетичні
          (догляд, всі види чисток, пілінги (поверхневі, поверхнево-серединні,
          біоревіталізанти) Я завжди рада допомогти своїм клієнтам знайти свій
          ідеальний образ та відчувати себе впевненими та привабливими!
        </div>
      </div>
      <div className='main-container'>
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default App;
