describe('Bubble Sort', function() {

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([])
  })

  it('handles a single item', function() {
    expect(bubbleSort([0])).toEqual([0])
  })

  it('handles multiple items', function() {
    expect(bubbleSort([1,3,2,5,8,0,4,6])).toEqual([0,1,2,3,4,5,6,8])
  })

  it('check that swap function is called', function() {
    spyOn(window, 'swap').and.callThrough()
    bubbleSort([1,3,2])
    expect(swap.calls.count()).toEqual(1);
  })

  it('check that compare function is called', function() {

    spyOn(window, 'compare').and.callThrough()
    bubbleSort([4,6,5,1])
    expect(compare.calls.count()).toEqual(12);
    })

})

// describe('A suite is just a function', function() {
//   var a

//   it('and so is a spec', function() {
//     a = true

//     expect(a).toBe(true)
//   })
// })
