class ProfileArticle extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <article>
        <hr />
        <p>
          Beliau adalah <span>Dr. Firanda Andirja Abidin</span> (lahir di
          Surabaya, 28 Oktober 1979, umur 40 tahun) atau lebih dikenal dengan
          nama <span>Firanda Andirja</span> atau bernama kunyah
          <span>Abu Abdil Muhsin</span> adalah seorang da'i yang aktif mengisi
          berbagai kajian islam di Indonesia. Ia juga merupakan salah satu
          narasumber Radio Rodja dan pernah menjadi penceramah Indonesia di
          Masjid Nabawi, Madinah.
        </p>
        <section>
          <h3>Kehidupan & pendidikan</h3>
          <hr />
          <p>
            Firanda Andirja lahir di Surabaya pada tanggal 28 Oktober 1979. Ia
            kemudian ikut merantau bersama orang tuanya ke Sorong, Papua dan
            mengabiskan masa kecilnya hingga lulus SMU/SMA di sana. Setelah
            lulus SMA, Firanda melanjutkan studi ke Fakultas Teknik Universitas
            Gadjah Mada program studi Teknik Kimia, tetapi hanya belajar dua
            semester saja. Karena lebih tertarik ilmu agama, ia kemudian
            memutuskan belajar agama di Pondok Pesatren Jamilurrahman Bantul,
            DIY selama 1,5 tahun, lalu melanjutkan studinya ke Universitas Islam
            Madinah, Arab Saudi hingga tingkat Doktoral.[1] Firanda menamatkan
            kuliah Magister-nya (S2) dengan tesis أَجْوِبَةُ شَيْخِ الإِسْلاَمِ
            ابْنِ تَيْمِيَّةَ رحمه الله عَنِ الشُّبْهَاتِ التَّفْصِيْلِيَّةِ
            لِلْمُعَطِّلَةِ فِي الصِّفَاتِ الذَّاتِيَّةِ (Jawaban Ibnu Taimiyyah
            terhadap syubhat-syubhat terperinci yang berkaitan dengan
            sifat-sifat Allah dzatiyah yang dilontarkan oleh para penolak
            sifat). Kemudian pada bulan September 2016, Firanda menyelesaikan
            program doktoralnya dengan judul disertasi نقض استدلالات دعاة
            التعددية الدينية بالنصوص الشرعية (Membantah da'i-da'i pluralisme
            yang berdalil dengan Al Qur'an dan As Sunnah) dengan predikat summa
            cumlaude.[1] Pada tahun 2001, Firanda menikah dengan Rosmala Dewi
            Arifudin atau bernama kunyah Ummu Abdil Muhsin. Dari hasil
            pernikahannya, ia dikaruniai 5 orang anak, putra dan putri.
          </p>
        </section>
        <section>
          <h3>Aktivitas</h3>
          <hr />
          <p>
            Ustadz Firanda pernah menjadi pengisi pengajian rutin berbahasa
            Indonesia di Masjid Nabawi, Madinah sejak tahun 2012, yang mana
            tidak sembarang orang diizinkan untuk menjadi pemateri di sana.
            Selain Ustadz Firanda, pengajian rutin Indonesia di sana juga diisi
            oleh ustadz Abdullah Roy yang juga belajar di Madinah. Saat ini,
            keduanya sudah tidak lagi mengisi pengajian tersebut dan digantikan
            oleh ustadz Ariful Bahri dari Kampar, Riau, yang sekaligus sedang
            menempuh pendidikan di Madinah. Ustadz Firanda juga merupakan salah
            satu pengisi tetap di Radio Rodja dan beberapa saluran media dakwah
            lainnya. Dalam beberapa kesempatan dakwahnya, dia juga menulis
            bantahan-bantahan terhadap polemik dari Quraish Shihab, tokoh-tokoh
            liberal seperti Ulil Abshar Abdalla, kelompok takfiri, dan membantah
            juga sejumlah tokoh haba'ib-haba'ib Indonesia yang dianggap nyleneh.
            Sampai saat ini, dia masih terus berdakwah dan mengadakan daurah di
            berbagai wilayah Nusantara.
          </p>
        </section>
        <hr />
        <p>
          Sumber :
          <a
            href="https://id.wikipedia.org/wiki/Firanda_Andirja#:~:text=Dr.,berbagai%20kajian%20islam%20di%20Indonesia. "target="_blank">Firanda Andirja - Wikipedia</a
          >
        </p>
      </article>
        `;
  }
}

customElements.define("profile-article", ProfileArticle);
