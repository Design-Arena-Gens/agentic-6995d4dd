import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('biography')

  const songs = [
    { title: 'آواز', transliteration: 'Awaz', year: 1973 },
    { title: 'سلطان قلبها', transliteration: 'Sultan-e-Qalbha', year: 1974 },
    { title: 'آهنگ شب', transliteration: 'Aahang-e-Shab', year: 1972 },
    { title: 'لیلی جان', transliteration: 'Laili Jan', year: 1975 },
    { title: 'میخانه', transliteration: 'Maikhana', year: 1974 },
    { title: 'چشمان سیاه', transliteration: 'Chashman-e-Siyah', year: 1973 },
    { title: 'مهتاب', transliteration: 'Mahtab', year: 1972 },
    { title: 'بگو مرا', transliteration: 'Bego Mara', year: 1975 }
  ]

  const albums = [
    { name: 'با تو', year: 1973, tracks: 12 },
    { name: 'عشق', year: 1974, tracks: 10 },
    { name: 'غزل‌ها', year: 1975, tracks: 14 },
    { name: 'آواز', year: 1973, tracks: 11 },
    { name: 'یادگار', year: 1976, tracks: 13 }
  ]

  return (
    <>
      <Head>
        <title>احمد ظاهر - Ahmad Zahir</title>
        <meta name="description" content="معلومات درباره احمد ظاهر، خواننده افسانه‌ای افغانستان" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <header className="header">
          <div className="header-content">
            <h1 className="title">احمد ظاهر</h1>
            <p className="subtitle">Ahmad Zahir - الویس افغانستان</p>
            <p className="dates">1946 - 1979</p>
          </div>
        </header>

        <nav className="tabs">
          <button
            className={`tab ${activeTab === 'biography' ? 'active' : ''}`}
            onClick={() => setActiveTab('biography')}
          >
            زندگینامه
          </button>
          <button
            className={`tab ${activeTab === 'music' ? 'active' : ''}`}
            onClick={() => setActiveTab('music')}
          >
            آهنگ‌ها
          </button>
          <button
            className={`tab ${activeTab === 'albums' ? 'active' : ''}`}
            onClick={() => setActiveTab('albums')}
          >
            آلبوم‌ها
          </button>
          <button
            className={`tab ${activeTab === 'legacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('legacy')}
          >
            میراث
          </button>
        </nav>

        <main className="main-content">
          {activeTab === 'biography' && (
            <div className="content-section">
              <h2>زندگینامه / Biography</h2>

              <div className="bio-card">
                <h3>آغاز زندگی</h3>
                <p>
                  احمد ظاهر در 14 جون 1946 در کابل، افغانستان متولد شد. پدرش عبدالظاهر یک سیاستمدار برجسته افغان بود.
                  احمد از کودکی به موسیقی علاقه‌مند بود و در دوران نوجوانی شروع به نواختن گیتار و آواز خواندن کرد.
                </p>
                <p>
                  Ahmad Zahir was born on June 14, 1946, in Kabul, Afghanistan. His father, Abdul Zahir, was a prominent Afghan politician.
                  Ahmad showed interest in music from childhood and began playing guitar and singing during his teenage years.
                </p>
              </div>

              <div className="bio-card">
                <h3>دوران طلایی</h3>
                <p>
                  در دهه 1970، احمد ظاهر به یکی از محبوب‌ترین خوانندگان افغانستان تبدیل شد. او بیش از 30 آلبوم منتشر کرد
                  و صدها آهنگ خواند که بسیاری از آنها هنوز هم در سراسر افغانستان و میان افغان‌های مقیم خارج از کشور محبوب هستند.
                </p>
                <p>
                  In the 1970s, Ahmad Zahir became one of Afghanistan's most beloved singers. He released over 30 albums
                  and recorded hundreds of songs that remain popular throughout Afghanistan and among the Afghan diaspora.
                </p>
              </div>

              <div className="bio-card">
                <h3>سبک موسیقی</h3>
                <p>
                  احمد ظاهر موسیقی افغانی سنتی را با آهنگ‌های غربی ترکیب کرد و سبکی نو و جذاب خلق نمود.
                  او از گیتار الکتریک، کیبورد و سازهای غربی در کنار سازهای سنتی افغانی مانند تبلا و هارمونیوم استفاده می‌کرد.
                </p>
                <p>
                  Ahmad Zahir blended traditional Afghan music with Western influences, creating a fresh and appealing style.
                  He used electric guitars, keyboards, and Western instruments alongside traditional Afghan instruments like tabla and harmonium.
                </p>
              </div>

              <div className="bio-card tragedy">
                <h3>مرگ مشکوک</h3>
                <p>
                  احمد ظاهر در 14 جون 1979 (روز تولد 33 سالگی‌اش) در یک تصادف رانندگی مشکوک در کابل جان باخت.
                  شرایط مرگ او هنوز هم محل بحث و گمانه‌زنی است و بسیاری معتقدند که او به دلایل سیاسی به قتل رسید.
                </p>
                <p>
                  Ahmad Zahir died on June 14, 1979 (his 33rd birthday) in a suspicious car accident in Kabul.
                  The circumstances of his death remain controversial, with many believing he was assassinated for political reasons.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'music' && (
            <div className="content-section">
              <h2>آهنگ‌های معروف / Famous Songs</h2>
              <div className="songs-grid">
                {songs.map((song, index) => (
                  <div key={index} className="song-card">
                    <div className="song-title">{song.title}</div>
                    <div className="song-subtitle">{song.transliteration}</div>
                    <div className="song-year">{song.year}</div>
                  </div>
                ))}
              </div>

              <div className="info-box">
                <h3>درباره موسیقی او</h3>
                <p>
                  احمد ظاهر بیش از 200 آهنگ خواند که اکثر آنها اشعار شاعران معروف فارسی و پشتو مانند حافظ، سعدی، رودکی و خوشحال خان ختک بودند.
                  او با صدای دلنشین و احساسی خود توانست این اشعار کهن را به زندگی تازه‌ای ببخشد.
                </p>
                <p>
                  Ahmad Zahir performed over 200 songs, most featuring poetry from renowned Persian and Pashto poets like Hafez, Saadi, Rudaki, and Khushal Khan Khattak.
                  With his melodious and emotional voice, he brought new life to these classical poems.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'albums' && (
            <div className="content-section">
              <h2>آلبوم‌ها / Albums</h2>
              <div className="albums-list">
                {albums.map((album, index) => (
                  <div key={index} className="album-card">
                    <div className="album-icon">🎵</div>
                    <div className="album-details">
                      <h3>{album.name}</h3>
                      <p>سال انتشار: {album.year}</p>
                      <p>تعداد آهنگ‌ها: {album.tracks}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-box">
                <p>
                  احمد ظاهر در طول دوران فعالیت خود که حدود 15 سال بود، بیش از 30 آلبوم منتشر کرد.
                  آلبوم‌های او ترکیبی از موسیقی سنتی افغانی، پاپ، راک و موسیقی هندی بودند.
                </p>
                <p>
                  During his approximately 15-year career, Ahmad Zahir released over 30 albums.
                  His albums blended traditional Afghan music with pop, rock, and Indian music influences.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'legacy' && (
            <div className="content-section">
              <h2>میراث / Legacy</h2>

              <div className="legacy-card">
                <h3>🌟 تأثیر فرهنگی</h3>
                <p>
                  احمد ظاهر بیش از 45 سال پس از مرگش هنوز هم محبوب‌ترین خواننده افغانستان است.
                  آهنگ‌های او در عروسی‌ها، مهمانی‌ها و جشن‌های افغانی در سراسر جهان پخش می‌شوند.
                </p>
                <p>
                  More than 45 years after his death, Ahmad Zahir remains Afghanistan's most beloved singer.
                  His songs are played at Afghan weddings, parties, and celebrations worldwide.
                </p>
              </div>

              <div className="legacy-card">
                <h3>🎭 نماد مقاومت</h3>
                <p>
                  برای بسیاری از افغان‌ها، احمد ظاهر نمادی از دوران طلایی افغانستان قبل از جنگ‌ها است.
                  موسیقی او یادآور زمانی است که صلح و آزادی در افغانستان حکمفرما بود.
                </p>
                <p>
                  For many Afghans, Ahmad Zahir symbolizes Afghanistan's golden era before decades of war.
                  His music reminds people of a time when peace and freedom prevailed in Afghanistan.
                </p>
              </div>

              <div className="legacy-card">
                <h3>🎸 پیشگام نوآوری</h3>
                <p>
                  احمد ظاهر اولین خواننده‌ای بود که موسیقی غربی را با موسیقی افغانی ترکیب کرد.
                  او الهام‌بخش نسل‌های بعدی خوانندگان افغان شد و راه را برای نوآوری در موسیقی افغانستان باز کرد.
                </p>
                <p>
                  Ahmad Zahir was the first to blend Western music with Afghan melodies.
                  He inspired generations of Afghan singers and paved the way for innovation in Afghan music.
                </p>
              </div>

              <div className="legacy-card">
                <h3>📚 به یاد ماندنی‌ها</h3>
                <ul>
                  <li>بیش از 200 آهنگ ضبط شده</li>
                  <li>30+ آلبوم منتشر شده</li>
                  <li>لقب "الویس افغانستان"</li>
                  <li>پیشگام موسیقی مدرن افغانی</li>
                  <li>میلیون‌ها طرفدار در سراسر جهان</li>
                </ul>
                <ul>
                  <li>Over 200 recorded songs</li>
                  <li>30+ released albums</li>
                  <li>Nicknamed "Elvis of Afghanistan"</li>
                  <li>Pioneer of modern Afghan music</li>
                  <li>Millions of fans worldwide</li>
                </ul>
              </div>
            </div>
          )}
        </main>

        <footer className="footer">
          <p>در یاد احمد ظاهر (1946-1979)</p>
          <p>In Memory of Ahmad Zahir (1946-1979)</p>
          <p className="quote">"موسیقی زبان جهانی است" - "Music is the universal language"</p>
        </footer>
      </div>
    </>
  )
}
