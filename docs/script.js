let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
  document.getElementById("lang-ru").classList.toggle("active", lang === "ru");

  if (lang === 'ru' && window.RU_LANG) {
    const RU = window.RU_LANG;
    document.getElementById("title").innerText = RU.title;
    document.getElementById("subtitle").innerText = RU.subtitle;
    // Tabs
    document.getElementById("tab_calcs_label").innerText = RU.tab_calcs_label;
    document.getElementById("tab_formats_label").innerText = RU.tab_formats_label;
    // Ohm
    document.getElementById("ohm_h2").innerText = RU.ohm_h2;
    document.getElementById("ohm_v_label").innerText = RU.ohm_v_label;
    document.getElementById("ohm_i_label").innerText = RU.ohm_i_label;
    document.getElementById("ohm_r_label").innerText = RU.ohm_r_label;
    document.getElementById("ohm_btn").innerText = RU.ohm_btn;
    // Resonance
    document.getElementById("res_h2").innerText = RU.res_h2;
    document.getElementById("res_l_label").innerText = RU.res_l_label;
    document.getElementById("res_c_label").innerText = RU.res_c_label;
    document.getElementById("res_btn").innerText = RU.res_btn;
    // Room
    document.getElementById("room_h2").innerText = RU.room_h2;
    document.getElementById("room_l_label").innerText = RU.room_l_label;
    document.getElementById("room_w_label").innerText = RU.room_w_label;
    document.getElementById("room_h_label").innerText = RU.room_h_label;
    document.getElementById("room_btn").innerText = RU.room_btn;
    // Distance
    document.getElementById("dist_h2").innerText = RU.dist_h2;
    document.getElementById("dist_d1_label").innerText = RU.dist_d1_label;
    document.getElementById("dist_spl1_label").innerText = RU.dist_spl1_label;
    document.getElementById("dist_d2_label").innerText = RU.dist_d2_label;
    document.getElementById("dist_btn").innerText = RU.dist_btn;
    // Amp
    document.getElementById("amp_h2").innerText = RU.amp_h2;
    document.getElementById("amp_v_label").innerText = RU.amp_v_label;
    document.getElementById("amp_r_label").innerText = RU.amp_r_label;
    document.getElementById("amp_btn").innerText = RU.amp_btn;
    // XO
    document.getElementById("xo_h2").innerText = RU.xo_h2;
    document.getElementById("xo_type_label").innerText = RU.xo_type_label;
    document.getElementById("xo_order_label").innerText = RU.xo_order_label;
    document.getElementById("xo_freq_label").innerText = RU.xo_freq_label;
    document.getElementById("xo_z_label").innerText = RU.xo_z_label;
    document.getElementById("xo_btn").innerText = RU.xo_btn;
    // Divider
    document.getElementById("div_h2").innerText = RU.div_h2;
    document.getElementById("div_vin_label").innerText = RU.div_vin_label;
    document.getElementById("div_r1_label").innerText = RU.div_r1_label;
    document.getElementById("div_r2_label").innerText = RU.div_r2_label;
    document.getElementById("div_btn").innerText = RU.div_btn;
    // Formats Tab
    document.getElementById("formats_h2").innerText = RU.formats_h2;
    document.getElementById("formats_intro").innerText = RU.formats_intro;
    document.getElementById("fmt_name").innerText = RU.fmt_name;
    document.getElementById("fmt_type").innerText = RU.fmt_type;
    document.getElementById("fmt_subcat").innerText = RU.fmt_subcat;
    document.getElementById("fmt_size").innerText = RU.fmt_size;
    document.getElementById("fmt_note").innerText = RU.fmt_note;
    // Table body fields
    document.getElementById("fmt_lossy").innerText = RU.fmt_lossy;
    document.getElementById("fmt_lossy2").innerText = RU.fmt_lossy2;
    document.getElementById("fmt_lossy3").innerText = RU.fmt_lossy3;
    document.getElementById("fmt_lossy4").innerText = RU.fmt_lossy4;
    document.getElementById("fmt_lossless").innerText = RU.fmt_lossless;
    document.getElementById("fmt_lossless2").innerText = RU.fmt_lossless2;
    document.getElementById("fmt_lossless3").innerText = RU.fmt_lossless3;
    document.getElementById("fmt_lossless4").innerText = RU.fmt_lossless4;
    document.getElementById("fmt_mp3note").innerText = RU.fmt_mp3note;
    document.getElementById("fmt_aacnote").innerText = RU.fmt_aacnote;
    document.getElementById("fmt_oggvorbisnote").innerText = RU.fmt_oggvorbisnote;
    document.getElementById("fmt_wavnote").innerText = RU.fmt_wavnote;
    document.getElementById("fmt_flacnote").innerText = RU.fmt_flacnote;
    document.getElementById("fmt_alacnote").innerText = RU.fmt_alacnote;
    document.getElementById("fmt_opusnote").innerText = RU.fmt_opusnote;
    document.getElementById("fmt_aiffnote").innerText = RU.fmt_aiffnote;
    document.getElementById("formats_footer").innerHTML = RU.formats_footer;
  } else {
    // Reset to English (reload to default content)
    location.reload();
  }
}

// Tabs
function showTab(tab) {
  document.getElementById('tab-calcs').classList.toggle('active', tab === 'calcs');
  document.getElementById('tab-formats').classList.toggle('active', tab === 'formats');
  document.getElementById('section-calcs').style.display = (tab === 'calcs') ? '' : 'none';
  document.getElementById('section-formats').style.display = (tab === 'formats') ? '' : 'none';
}

// Helper for string formatting
function fmt(str, ...args) {
  return str.replace(/\{(\d+)\}/g, (_, i) => args[i] !== undefined ? args[i] : "");
}

// --- Calculators code unchanged below (same as previous) ---

// Ohm's Law Calculator
function calcOhm() {
  let V = parseFloat(document.getElementById('ohm_v').value);
  let I = parseFloat(document.getElementById('ohm_i').value);
  let R = parseFloat(document.getElementById('ohm_r').value);
  let lang = currentLang;
  let res = '';
  if (!isNaN(V) && !isNaN(I)) {
    R = V / I;
    res = lang === 'ru' ? fmt(RU_LANG.ohm_r, R.toFixed(3)) : `Resistance R = ${R.toFixed(3)} Ω`;
  } else if (!isNaN(V) && !isNaN(R)) {
    I = V / R;
    res = lang === 'ru' ? fmt(RU_LANG.ohm_i, I.toFixed(3)) : `Current I = ${I.toFixed(3)} A`;
  } else if (!isNaN(I) && !isNaN(R)) {
    V = I * R;
    res = lang === 'ru' ? fmt(RU_LANG.ohm_v, V.toFixed(3)) : `Voltage V = ${V.toFixed(3)} V`;
  } else {
    res = lang === 'ru' ? RU_LANG.ohm_need : 'Enter any two values.';
  }
  document.getElementById('ohm_result').innerHTML = res;
}

// Resonance Frequency Calculator
function calcResonance() {
  let L = parseFloat(document.getElementById('res_l').value);
  let C = parseFloat(document.getElementById('res_c').value);
  let lang = currentLang;
  if (isNaN(L) || isNaN(C) || L <= 0 || C <= 0) {
    document.getElementById('res_result').innerText = lang === 'ru' ? RU_LANG.res_need : 'Enter L and C.';
    return;
  }
  let L_H = L / 1000, C_F = C / 1e6;
  let f = 1 / (2 * Math.PI * Math.sqrt(L_H * C_F));
  document.getElementById('res_result').innerText = lang === 'ru' ? fmt(RU_LANG.res_f, f.toFixed(2)) : `Resonance F = ${f.toFixed(2)} Hz`;
}

// Room Modes Calculator
function calcRoomModes() {
  let l = parseFloat(document.getElementById('room_l').value);
  let w = parseFloat(document.getElementById('room_w').value);
  let h = parseFloat(document.getElementById('room_h').value);
  let lang = currentLang;
  if (isNaN(l) || isNaN(w) || isNaN(h) || l <= 0 || w <= 0 || h <= 0) {
    document.getElementById('room_result').innerText = lang === 'ru' ? RU_LANG.room_need : 'Enter all dimensions.';
    return;
  }
  const c = 343;
  let fl = c / (2 * l), fw = c / (2 * w), fh = c / (2 * h);
  let out = lang === 'ru'
    ? fmt(RU_LANG.room_first_modes, fl.toFixed(1), fw.toFixed(1), fh.toFixed(1))
    : `First axial modes:<br>
    Length: <b>${fl.toFixed(1)} Hz</b><br>
    Width: <b>${fw.toFixed(1)} Hz</b><br>
    Height: <b>${fh.toFixed(1)} Hz</b>`;
  document.getElementById('room_result').innerHTML = out;
}

// Sound Level vs Distance
function calcDistance() {
  let d1 = parseFloat(document.getElementById('dist_d1').value);
  let spl1 = parseFloat(document.getElementById('dist_spl1').value);
  let d2 = parseFloat(document.getElementById('dist_d2').value);
  let lang = currentLang;
  if (isNaN(d1) || isNaN(spl1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
    document.getElementById('dist_result').innerText = lang === 'ru' ? RU_LANG.dist_need : 'Enter distances and SPL.';
    return;
  }
  let spl2 = spl1 - 20 * Math.log10(d2 / d1);
  let out = lang === 'ru'
    ? fmt(RU_LANG.dist_result, d2, spl2.toFixed(1))
    : `SPL at ${d2} m: ${spl2.toFixed(1)} dB`;
  document.getElementById('dist_result').innerText = out;
}

// Amplifier Power Calculator
function calcAmp() {
  let V = parseFloat(document.getElementById('amp_v').value);
  let R = parseFloat(document.getElementById('amp_r').value);
  let lang = currentLang;
  if (isNaN(V) || isNaN(R) || R <= 0) {
    document.getElementById('amp_result').innerText = lang === 'ru' ? RU_LANG.amp_need : 'Enter Vrms and R.';
    return;
  }
  let P = V * V / R;
  let out = lang === 'ru'
    ? fmt(RU_LANG.amp_result, P.toFixed(2))
    : `Power = ${P.toFixed(2)} W`;
  document.getElementById('amp_result').innerText = out;
}

// Crossover Calculator
function calcXO() {
  let type = document.getElementById('xo_type').value;
  let order = parseInt(document.getElementById('xo_order').value);
  let f = parseFloat(document.getElementById('xo_freq').value);
  let z = parseFloat(document.getElementById('xo_z').value);
  let lang = currentLang;
  if (isNaN(order) || isNaN(f) || isNaN(z) || f <= 0 || z <= 0) {
    document.getElementById('xo_result').innerText = lang === 'ru' ? RU_LANG.xo_need : 'Enter all values.';
    return;
  }
  let result = '';
  if (order === 1) {
    if (type === 'lowpass') {
      let C = 1 / (2 * Math.PI * f * z);
      result = lang === 'ru'
        ? fmt(RU_LANG.xo_lp1, (C * 1e6).toFixed(2))
        : `Low-pass RC: C = ${(C * 1e6).toFixed(2)} μF`;
    } else {
      let L = z / (2 * Math.PI * f);
      result = lang === 'ru'
        ? fmt(RU_LANG.xo_hp1, (L * 1e3).toFixed(2))
        : `High-pass RL: L = ${(L * 1e3).toFixed(2)} mH`;
    }
  } else if (order === 2) {
    let C = 1 / (2 * Math.PI * f * z);
    let L = z / (2 * Math.PI * f);
    result = lang === 'ru'
      ? fmt(RU_LANG.xo_2nd, (C * 1e6).toFixed(2), (L * 1e3).toFixed(2))
      : `2nd order:<br>C = ${(C * 1e6).toFixed(2)} μF<br>L = ${(L * 1e3).toFixed(2)} mH`;
  } else if (order === 3 || order === 4) {
    result = lang === 'ru'
      ? fmt(RU_LANG.xo_adv, order)
      : `Order ${order}: Use active or complex passive circuits.<br>
    <a href="https://www.diyaudioandvideo.com/Calculator/SpeakerCrossover/" target="_blank">See advanced calculator</a>`;
  }
  document.getElementById('xo_result').innerHTML = result;
}

// Voltage Divider Calculator
function calcDivider() {
  let Vin = parseFloat(document.getElementById('div_vin').value);
  let R1 = parseFloat(document.getElementById('div_r1').value);
  let R2 = parseFloat(document.getElementById('div_r2').value);
  let lang = currentLang;
  if (isNaN(Vin) || isNaN(R1) || isNaN(R2) || R1 < 0 || R2 <= 0) {
    document.getElementById('div_result').innerText = lang === 'ru' ? RU_LANG.div_need : 'Enter Vin, R1, R2.';
    return;
  }
  let Vout = Vin * (R2 / (R1 + R2));
  let out = lang === 'ru'
    ? fmt(RU_LANG.div_result, Vout.toFixed(3))
    : `Vout = ${Vout.toFixed(3)} V`;
  document.getElementById('div_result').innerText = out;
}