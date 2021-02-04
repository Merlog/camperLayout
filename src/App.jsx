import spoluprace1 from './assets/spoluprace1.svg';
import spoluprace2 from './assets/spoluprace2.svg';
import spoluprace3 from './assets/spoluprace3.svg';
import spoluprace4 from './assets/spoluprace4.svg';
import howTo1 from './assets/howTo1.svg';
import howTo2 from './assets/howTo2.svg';
import howTo3 from './assets/howTo3.svg';
import howTo4 from './assets/howTo4.svg';
import logoCamper from './assets/logo-camper.svg';
import ilust1 from './assets/ilust1.svg';
import ilust2 from './assets/ilust2.svg';
import styles from './App.module.css';

import Button from './components/Button/Button';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.content}>
        <div className={styles.top}>
          <img src={logoCamper} className={styles.logoCamper} alt="logo" />
          </div>
          <div className={styles.middle}>
          <h1>
            Nabídněte<br />
            <span>svou obytnou dodávku</span><br />
            na Campervan.cz
          </h1>
          <p>
            Je to zdarma a bez provizí. Registraci máte hotovou za 5 minut.
          </p>
          <Button/>
        </div>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Vaše spokojenost je pro nás prioritou</h2>
          <div className={styles.flex}>
            <div className={styles.left}>

              <p>
                Nabízíme vám řešení, díky kterým můžete pronajímat bez obav:
        </p>
              <ul>
                <li>Nastavte si vlastní <b>podmínky pronájmu.</b></li>
                <li>
                  Vyžádejte si od zákazníků <b>zálohu na případné škody.</b>
                </li>
                <li>Své <b>rezervace spravujete odkudkoliv</b> přímo na Campervan.cz</li>
                <li>Přijímejte od zákazníků <b>platby kartou</b> díky zabezpečené platební bráně.</li>
                <li>
                  Máte <b>dokonalý přehled</b> díky automatickým e-mailovým notifikacím.
          </li>
              </ul>
            </div>
            <div className={styles.right}>
              <img src={ilust1} className={styles.ilust1} alt="logo" />
            </div>
          </div>


          <h2>Výhody spolupráce s námi</h2>
          <div className={styles.wrapper}>
            <div className={styles.box}>
              <div className={styles.spolupraceImage}>
                <img src={spoluprace1} className={styles.spoluprace1} alt="spoluprace1" />
              </div>
              <h3>
                Vaši nabídku uvidí tisíce uživatelů
              </h3>
              <p>
              Naše stránky navštěvují tisíce uživatelů měsíčně a evidujeme rostoucí poptávku každý rok.
                          Přidáním svého vozu budete v hledáčku stovek vážných zájemců a to zcela bezplatně.
                    
              </p>
              </div>
            <div className={styles.box}>
              <div className={styles.spolupraceImage}>
                <img src={spoluprace2} className={styles.spoluprace2} alt="spoluprace2" />
              </div>
              <h3>
                Rezervační systém bez provizí
              </h3>
<p>            Jak je možné, že je systém zdarma a bez provize? Většina portálů požaduje provizi v průměru 20% za každou rezervaci. U nás žádný poplatek neplatíte. Systém je sponzorovaný naši campervan půjčovnou.
</p>
          </div>
            <div className={styles.box}>
              <div className={styles.spolupraceImage}>
                <img src={spoluprace3} className={styles.spoluprace3} alt="spoluprace3" />
              </div>
              <h3>
                Rezervační systém bez provizí
              </h3>
<p>            Podmínky rezervace jsou plně ve vašich rukou. Nastavte si zálohu, storno podmínky, minimální dobu zapůjčení nebo doplňkové služby a zvýhodnění.
</p>
          </div>
            <div className={styles.box}>
              <div className={styles.spolupraceImage}>
                <img src={spoluprace4} className={styles.spoluprace4} alt="spoluprace4" />
              </div>
              <h3>
                Vše potřebné na jednom místě
              </h3>
<p>            Podmínky rezervace jsou plně ve vašich rukou. Nastavte si zálohu, storno podmínky, minimální dobu zapůjčení nebo doplňkové služby a zvýhodnění.
</p>
          </div>
          </div>
        </div>

      </div>
      <div className={styles.lightBlue}>
        <div className={styles.content}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <h2>
              Váš obytný vůz bude <br />
  na očích stovek nových zájemců
          </h2>
            <p>
              Získejte jednoduše nové zákazníky díky naší platformě.<br/> Stačí se zaregistrovat a přidat svůj vůz do nabídky.
          </p>
          <Button/>
          </div>

          <div className={styles.right}>
            <img src={ilust2} className={styles.ilust2} alt="logo" />
          </div>
        </div>
        </div>
      </div>

      <div className={styles.howTo}>
        <h2>Jak na to?</h2>
        <div className={styles.howToWrapper}>
          <div className={styles.box}>
            <div className={styles.order}>
              <div className={styles.number}>1.</div>
              <img src={howTo1} className={styles.howTo1} alt="logo" />
            </div>
            <div className={styles.Title}>
            <h3>
              Vytvořte si účet
            </h3>
            </div>
            <p>

              Registrace je jednoduchá a bezplatná.
</p>
          </div>
          <div className={styles.box}>
            <div className={styles.order}>
              <div className={styles.number}>2.</div>
              <img src={howTo2} className={styles.howTo2} alt="logo" />
            </div>
            <div className={styles.Title}>
            <h3>
              Přidejte své auto
            </h3>
            </div>
            <p>
              Přidejte auto, nahrajte dokumenty k autu a doplňte profil auta.
</p>

          </div>
          <div className={styles.box}>
            <div className={styles.order}>
              <div className={styles.number}>3.</div>
              <img src={howTo3} className={styles.howTo3} alt="logo" />
            </div>
            <div className={styles.Title}>
            <h3>
              Nastavte dostupnost
            </h3>
            </div>
            <p>

              Stanovte si cenu, pravidla vypůjčky a dostupnost v kalendáři.
</p>
          </div>
          <div className={styles.box}>
            <div className={styles.order}>
              <div className={styles.number}>4.</div>
              <img src={howTo4} className={styles.howTo4} alt="logo" />
            </div>
            <div className={styles.Title}>
            <h3>
              Reagujte na poptávky
            </h3>
            </div>
            <p>

              O všech poptávkách budete informování prostřednictvím e-mailu. Nic vám neunikne.
</p>
          </div>
        </div>
      </div>
      <div className={styles.registrSection}>
        <div className={styles.content}>
          <div className={styles.flex}>
            <div className={styles.left}>
              <h4>Registrujte se už dnes, ať jste připraveni <span>na sezónu 2021!</span>

              </h4>
            </div>
            <div className={styles.right}>
            <div className={styles.registr}>
              <h3>Co získám registrací?</h3>
              <ul>
                <li>
                  Rezervační systém bez poplatků
              </li>
                <li>
                  Nový zdroj potenciálních zákazníků
              </li>
                <li>
                  Možnost přijímat platby kartou
              </li>
                <li>
                  Podpora na telefonu nebo e-mailu
              </li>
              </ul>

              <Button/>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div >
  );
}

export default App;
