 function() {
    expect(paragraphSelector().length).toBe(1);
    expect(paragraphSelector()[0].innerHTML).toEqual($('p')[0].innerHTML);
  });