const arr = [5, 2, 9, 1, 5, 6];

/**
 * 冒泡排序实现
 * 时间复杂度：O(n²) - 需要两层循环
 * 空间复杂度：O(1) - 只需要一个临时变量
 * 
 * 思路：
 * 1. 外层循环控制排序轮数，每轮确定一个最大值
 * 2. 内层循环比较相邻元素，将大的往后冒泡
 * 3. 优化点：如果一轮中没有发生交换，说明已经有序
 */
function bubbleSort(arr) {
  const len = arr.length;
  
  // 外层循环：控制排序轮数
  for (let i = 0; i < len - 1; i++) {
    // 优化标志：本轮是否发生交换
    let swapped = false;
    
    // 内层循环：相邻元素比较
    // 注意：len-1-i 是因为每轮都会确定一个最大值
    for (let j = 0; j < len - 1 - i; j++) {
      // 如果前面的数大于后面的数，交换位置
      if (arr[j] > arr[j + 1]) {
        // ES6解构赋值实现交换
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
      
      console.log(`第${i+1}轮第${j+1}次比较:`, [...arr]);
    }
    
    // 如果没有发生交换，说明数组已经有序
    if (!swapped) {
      console.log(`第${i+1}轮没有发生交换，排序完成`);
      break;
    }
  }
  
  return arr;
}

// 测试
console.log('原始数组:', arr);
console.log('排序后:', bubbleSort(arr));

/**
 * 执行过程演示：
 * 初始：[5, 2, 9, 1, 5, 6]
 * 
 * 第1轮：
 * 5,2 比较 -> [2, 5, 9, 1, 5, 6]
 * 5,9 比较 -> [2, 5, 9, 1, 5, 6]
 * 9,1 比较 -> [2, 5, 1, 9, 5, 6]
 * 9,5 比较 -> [2, 5, 1, 5, 9, 6]
 * 9,6 比较 -> [2, 5, 1, 5, 6, 9]
 * 
 * 第2轮：
 * 2,5 比较 -> [2, 5, 1, 5, 6, 9]
 * 5,1 比较 -> [2, 1, 5, 5, 6, 9]
 * 5,5 比较 -> [2, 1, 5, 5, 6, 9]
 * 5,6 比较 -> [2, 1, 5, 5, 6, 9]
 * 
 * 以此类推...
 */
