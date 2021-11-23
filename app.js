let chosenMaxLife = 100;
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 20;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  attackMonster('ATTACK');
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0) {
    alert('You won');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('Draw');
  }
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal more than your max health");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
