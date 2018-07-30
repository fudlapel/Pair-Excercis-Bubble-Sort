describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    //tests that even numbered array splits to two even-numbered arrays
    expect(split([1,2,3,4,5,6])).toEqual([[1,2,3], [4,5,6]]);
    //tests that odd numbered array splits to two arrays, first even/nigger,
    //second odd.smaller
    expect(split([1,2,3,4,5])).toEqual([[1,2,3], [4,5]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,2,3], [4,5])).toEqual([1,2,3,4,5]);
    //expect(merge([1,5,4], [3,2])).toEqual([1,2,3,4,5]);
  });
});
