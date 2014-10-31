describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should store an item of any type', function(){
    set.add(5);
    set.add(true);
    set.add(null);
    set.add(function() { alert('hi'); });
    set.add(undefined);
    set.add({ a: 5 });
    expect(set.contains(5)).to.equal(true);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains(null)).to.equal(true);
    expect(set.contains(function() { alert('hi'); })).to.equal(true);
    expect(set.contains(undefined)).to.equal(true);
    expect(set.contains({a:5})).to.equal(true);
  });

});
