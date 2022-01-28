const merge = require('./88-merge');

test('merge1', () => {
  const nums1 = [1,2,3,0,0,0];
  const m = 3; 
  const nums2 = [2,5,6];
  const n = 3
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1,2,2,3,5,6]);
});

test('merge2', () => {
  const nums1 = [0];
  const m = 0; 
  const nums2 = [1];
  const n = 1;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1]);
});

test('merge3', () => {
  const nums1 = [1, 0];
  const m = 1; 
  const nums2 = [2];
  const n = 1;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1, 2]);
});