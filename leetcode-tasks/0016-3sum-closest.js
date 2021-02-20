/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  const table = new Map();
  const { length: len } = nums;
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  let result = nums[0] + nums[1] + nums[2];
  let near = Math.abs(target - result);

  //добавляем в таблицу мап элементы
  for (let num of nums) {
    if (!table.has(num)) table.set(num, 1);
    else table.set(num, table.get(num) + 1);
  }
  // берет по очереди первый элемент
  for (let i = 0; i < len - 1; i++) {
    // берет по очереди второй элемент
    for (let j = i + 1; j < len; j++) {
      // ищем идеальную для данной пары разницу
      const idealDiff = target - (nums[i] + nums[j]);
      //назначаем первый
      const start = idealDiff - near < min ? min : idealDiff - near;
      // назначаем самый дальний элемент от идеального в диапазоне уже найденных
      const end = idealDiff + near > max ? max : idealDiff + near;

      // ищем перебором о самого маленького в диапазоне уже найденных до идеального в обе стороны от идеального
      for (let k = start; k <= end; k++) {
        if (
          !table.has(k) ||
          (nums[i] === k && table.get(k) < 2) ||
          (nums[j] === k && table.get(k) < 2) ||
          // если найденные хорошие значения третьего элемента повторяются с первым и вторым, но их нет в начальном массиве
          (nums[j] === nums[i] && nums[i] === k && table.get(k) < 3)
        )
          continue;

        // задаем текущую сумму для дополнительной проверки
        const currSum = nums[i] + nums[j] + k;
        // задаем текущую разницу
        const currNear = Math.abs(target - currSum);

        if (currNear < near) {
          result = currSum;
          near = currNear;
        }
      }
    }
  }

  return result;
};
