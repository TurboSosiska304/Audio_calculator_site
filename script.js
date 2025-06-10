// Ohm's Law Calculator
function calcOhm() {
  let V = parseFloat(document.getElementById('ohm_v').value);
  let I = parseFloat(document.getElementById('ohm_i').value);
  let R = parseFloat(document.getElementById('ohm_r').value);
  let res = '';
  if (!isNaN(V) && !isNaN(I)) {
    R = V / I;
    res = `Resistance R = ${R.toFixed(3)} Ω`;
  } else if (!isNaN(V) && !isNaN(R)) {
    I = V / R;
    res = `Current I = ${I.toFixed(3)} A`;
  } else if (!isNaN(I) && !isNaN(R)) {
    V = I * R;
    res = `Voltage V = ${V.toFixed(3)} V`;
  } else {
    res = 'Enter any two values.';
  }
  document.getElementById('ohm_result').innerText = res;
}

// Resonance Frequency Calculator
function calcResonance() {
  let L = parseFloat(document.getElementById('res_l').value); // mH
  let C = parseFloat(document.getElementById('res_c').value); // uF
  if (isNaN(L) || isNaN(C) || L <= 0 || C <= 0) {
    document.getElementById('res_result').innerText = 'Enter L and C.';
    return;
  }
  // f = 1 / (2π√(LC)), L in H, C in F
  let L_H = L / 1000;
  let C_F = C / 1e6;
  let f = 1 / (2 * Math.PI * Math.sqrt(L_H * C_F));
  document.getElementById('res_result').innerText = `Resonance F = ${f.toFixed(2)} Hz`;
}

// Room Modes Calculator
function calcRoomModes() {
  let l = parseFloat(document.getElementById('room_l').value);
  let w = parseFloat(document.getElementById('room_w').value);
  let h = parseFloat(document.getElementById('room_h').value);
  if (isNaN(l) || isNaN(w) || isNaN(h) || l <= 0 || w <= 0 || h <= 0) {
    document.getElementById('room_result').innerText = 'Enter all dimensions.';
    return;
  }
  const c = 343; // speed of sound, m/s
  // Axial modes f = c / 2L
  let fl = c / (2 * l);
  let fw = c / (2 * w);
  let fh = c / (2 * h);
  document.getElementById('room_result').innerHTML =
    `First axial modes:<br>
    Length: <b>${fl.toFixed(1)} Hz</b><br>
    Width: <b>${fw.toFixed(1)} Hz</b><br>
    Height: <b>${fh.toFixed(1)} Hz</b>`;
}

// Sound Level vs Distance
function calcDistance() {
  let d1 = parseFloat(document.getElementById('dist_d1').value);
  let spl1 = parseFloat(document.getElementById('dist_spl1').value);
  let d2 = parseFloat(document.getElementById('dist_d2').value);
  if (isNaN(d1) || isNaN(spl1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
    document.getElementById('dist_result').innerText = 'Enter distances and SPL.';
    return;
  }
  // SPL2 = SPL1 - 20*log10(d2/d1)
  let spl2 = spl1 - 20 * Math.log10(d2 / d1);
  document.getElementById('dist_result').innerText = `SPL at ${d2} m: ${spl2.toFixed(1)} dB`;
}

// Amplifier Power Calculator
function calcAmp() {
  let V = parseFloat(document.getElementById('amp_v').value);
  let R = parseFloat(document.getElementById('amp_r').value);
  if (isNaN(V) || isNaN(R) || R <= 0) {
    document.getElementById('amp_result').innerText = 'Enter Vrms and R.';
    return;
  }
  // P = V^2 / R
  let P = V * V / R;
  document.getElementById('amp_result').innerText = `Power = ${P.toFixed(2)} W`;
}

// Crossover Calculator
function calcXO() {
  let type = document.getElementById('xo_type').value;
  let order = parseInt(document.getElementById('xo_order').value);
  let f = parseFloat(document.getElementById('xo_freq').value);
  let z = parseFloat(document.getElementById('xo_z').value);
  if (isNaN(order) || isNaN(f) || isNaN(z) || f <= 0 || z <= 0) {
    document.getElementById('xo_result').innerText = 'Enter all values.';
    return;
  }
  let result = '';
  // 1st order LPF: C = 1/(2πfZ), HPF: L = Z/(2πf)
  if (order === 1) {
    if (type === 'lowpass') {
      let C = 1 / (2 * Math.PI * f * z);
      result = `Low-pass RC: C = ${(C * 1e6).toFixed(2)} μF`;
    } else {
      let L = z / (2 * Math.PI * f);
      result = `High-pass RL: L = ${(L * 1e3).toFixed(2)} mH`;
    }
  } else if (order === 2) {
    // Sallen-Key, Butterworth: C = 1/(2πfZ) for each
    let C = 1 / (2 * Math.PI * f * z);
    let L = z / (2 * Math.PI * f);
    result = `2nd order:<br>C = ${(C * 1e6).toFixed(2)} μF<br>L = ${(L * 1e3).toFixed(2)} mH`;
  } else if (order === 3 || order === 4) {
    result = `Order ${order}: Use active or complex passive circuits.<br>
    <a href="https://www.diyaudioandvideo.com/Calculator/SpeakerCrossover/" target="_blank">See advanced calculator</a>`;
  }
  document.getElementById('xo_result').innerHTML = result;
}

// Voltage Divider Calculator
function calcDivider() {
  let Vin = parseFloat(document.getElementById('div_vin').value);
  let R1 = parseFloat(document.getElementById('div_r1').value);
  let R2 = parseFloat(document.getElementById('div_r2').value);
  if (isNaN(Vin) || isNaN(R1) || isNaN(R2) || R1 < 0 || R2 <= 0) {
    document.getElementById('div_result').innerText = 'Enter Vin, R1, R2.';
    return;
  }
  let Vout = Vin * (R2 / (R1 + R2));
  document.getElementById('div_result').innerText = `Vout = ${Vout.toFixed(3)} V`;
}