import React, { useState } from 'react';
import playDownload from './assets/play-game.jpg';
import kids from './assets/learn-content.jpg';
import learn from './assets/host-classroom.jpg';
import footerShot from './assets/celebrations.jpg';

const faqs = [
  ['What is the quiz app?', 'A mobile and web experience for creating, hosting, joining and studying through interactive quizzes.'],
  ['Is it free?', 'You can start for free. Optional paid features can be shown separately.'],
  ['How do I download the app?', 'Use the App Store or Google Play buttons in the download section.'],
  ['Does it work on iPhone and Android?', 'Yes. The page is designed for both major mobile platforms and modern browsers.'],
  ['How can I use it for trivia?', 'Pick or create a trivia game, host it, share the game PIN and let everyone answer live.'],
  ['How can I use it as a quiz game?', 'Choose a quiz, start a live session and have players answer from their own devices.'],
  ['How can I make my own quiz?', 'Use the create flow to add questions, answer choices, images and timing.']
];

function Header({ menuOpen, setMenuOpen }) {
  return <header className="site-header">
    <div className="nav">
      <a href="#top" className="brand" aria-label="Home">K<span>!</span></a>
      <nav className={menuOpen ? 'nav-links show' : 'nav-links'}>
        <a href="#play" onClick={() => setMenuOpen(false)}>Join</a>
        <a className="nav-pill" href="#create" onClick={() => setMenuOpen(false)}>Start for FREE</a>
        <a className="nav-pill" href="#faq" onClick={() => setMenuOpen(false)}>Log in</a>
        <button className="lang">◎ EN</button>
      </nav>
      <button className="hamb" onClick={() => setMenuOpen(v => !v)} aria-label="Menu"><i/><i/><i/></button>
    </div>
  </header>;
}

function Hero() {
  return <section id="top" className="hero">
    <div className="hero-inner">
      <h1>Quiz app: games and trivia for iPhone and Android</h1>
      <p>Create fun quiz games, host trivia nights and turn learning into an interactive experience.</p>
      <p>Great for lessons, presentations, study sessions and gatherings.</p>
      <div className="hero-offer">Premium plans available from $3/month. Save 20% for a limited time.</div>
      <a className="green-btn" href="#download">Get started</a>
    </div>
  </section>;
}

function Feature({ id, label, title, text, image, reverse=false, mock=false }) {
  return <section id={id} className={`feature ${reverse ? 'reverse' : ''}`}>
    <div className="feature-copy">
      <h2>{label}: {title}</h2>
      <p>{text}</p>
    </div>
    <div className="feature-visual">
      {mock ? <QuizMock /> : <img src={image} alt="" />}
    </div>
  </section>;
}

function QuizMock() {
  return <div className="quiz-mock">
    <div className="mock-sidebar"><b>Quiz</b><span>Question 1</span><span>Question 2</span><span>Question 3</span><span>Question 4</span></div>
    <div className="mock-main">
      <div className="mock-question">Which answer is correct?</div>
      <div className="answers"><b>▲</b><b>◆</b><b>●</b><b>■</b></div>
    </div>
  </div>;
}

function PlayBlock() {
  const [pin, setPin] = useState('');
  const [joined, setJoined] = useState(false);
  return <section id="play" className="play-block">
    <div className="play-copy">
      <h2>Play: Join any game instantly</h2>
      <p>Got a PIN? Enter it and join the live game from a phone, tablet or browser.</p>
    </div>
    <div className="pin-card">
      <div className="qr-box"><div className="qr">▦</div><small>GAME PIN</small><strong>815 493</strong></div>
      <div className="pin-form"><input value={pin} onChange={e=>setPin(e.target.value.replace(/\D/g,'').slice(0,6))} placeholder="Game PIN" inputMode="numeric"/><button onClick={()=>setJoined(Boolean(pin))}>Join</button>{joined && <small>Joining game {pin}…</small>}</div>
    </div>
  </section>;
}

function DownloadSection() {
  return <>
    <section id="download" className="download">
      <div className="download-copy"><div className="app-icon">K<span>!</span></div><div><h2>Download the app for free and play across your devices!</h2><p>One app, unlimited fun</p></div></div>
      <div className="store-row"><a> <b>App Store</b></a><a>▶ <b>Google Play</b></a><a>◉ <b>Chromebook</b></a></div>
      <img className="download-art" src={playDownload} alt="" />
    </section>
    <section className="kids"><div><img src={kids} alt="" /></div><div><h2>Download the Kids version of the app.</h2><p>Kids: Learn and Play</p><div className="store-row"><a> <b>App Store</b></a><a>▶ <b>Google Play</b></a></div></div></section>
  </>;
}

function FAQ() {
  const [open, setOpen] = useState(-1);
  return <section id="faq" className="faq"><h2>Frequently Asked Questions</h2>{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpen(open===i?-1:i)}><span>{q}</span><b>{open===i?'⌃':'⌄'}</b></button>{open===i&&<p>{a}</p>}</div>)}</section>;
}

function Celebrations() {
  const cards = ['All celebrations','Birthdays','Sports nights','Showing appreciation'];
  const [index,setIndex] = useState(0);
  return <section className="celebrations"><div className="cele-head"><h2>Bring fun to more special occasions</h2><div><button onClick={()=>setIndex((index+cards.length-1)%cards.length)}>‹</button><button onClick={()=>setIndex((index+1)%cards.length)}>›</button></div></div><div className="cele-card"><h3>{cards[index]}</h3><div className="cele-grid"><div/><div/><div/><div/></div></div></section>;
}

function Footer() {
  const groups=['About','Solutions','Resources','Legal and Compliance','Follow us'];
  const [open,setOpen]=useState(-1);
  return <footer><div className="footer-groups">{groups.map((g,i)=><div key={g}><button onClick={()=>setOpen(open===i?-1:i)}>{g}<span>{open===i?'⌃':'⌄'}</span></button>{open===i&&<div className="footer-links"><a href="#top">Overview</a><a href="#faq">Help</a><a href="#download">Apps</a></div>}</div>)}</div><div className="partners"><div>Microsoft<br/><small>Partner</small></div><div>Google for Education<br/><small>Partner</small></div></div><p className="copy">Copyright © 2026. All Rights Reserved.</p><div className="footer-stores"><span> App Store</span><span>▶ Google Play</span><span>◉ AppGallery</span></div><img className="footer-shot" src={footerShot} alt=""/></footer>;
}

function Promo() { return <div className="promo"><div>Host awesome get-togethers with <b>Quiz+.</b> <b>Get Quiz+ from $3/mo. Save 20%.</b><br/>Offer ends September 30.</div><button>Buy now</button></div>; }

export default function App(){ const [menuOpen,setMenuOpen]=useState(false); return <><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/><main><Hero/><section className="intro"><h2>One app. Create, host, play, and learn.</h2><p>Build lessons, turn notes into study tools, or make a game night more engaging. Create and play on almost any device.</p></section><Feature id="create" label="Create" title="Build a quiz on anything" text="Make your own quiz, trivia game or study set in minutes, with questions, media and answer choices." mock/><Feature label="Host" title="Run a live game with your group" text="Share a PIN and watch players join in real time. Host in a classroom, on a big screen or over a video call." image={learn} reverse/><PlayBlock/><Feature label="Learn" title="Turn any content into a game" text="Turn your material into flashcards or a quiz and explore ready-made activities for many subjects." image={learn}/><DownloadSection/><FAQ/><Celebrations/></main><Promo/><Footer/></>; }
