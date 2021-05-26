// TODO: complete this object/class

// https://www.codewars.com/kata/515bb423de843ea99400000a

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex < this.pageCount()) {
    return this.itemsPerPage;
  } else if (pageIndex === this.pageCount()) {
    return this.pageCount() % this.itemsPerPage;
  } else {
    return -1;
  }
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex < 0 || itemIndex > this.itemCount) {
    return -1;
  }
  return Math.floor(itemIndex / this.itemsPerPage);
};

// TODO: complete this object/class

// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex < 0) return -1;
  if (pageIndex > this.pageCount() - 1) return -1;

  if (pageIndex < this.pageCount() - 1) {
    // 1 < 2
    return this.itemsPerPage; // 4
  } else if (pageIndex === this.pageCount() - 1) {
    return this.pageCount() % this.itemsPerPage;
  } else {
    return -1;
  }
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (this.itemCount === 0 || itemIndex === 0) return -1;
  if (itemIndex < 0 || itemIndex > this.itemCount) {
    return -1;
  }
  return Math.floor(itemIndex / this.itemsPerPage);
};


// oneliners


// one liners

function PaginationHelper(collection, itemsPerPage){
  this.collection = collection, this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return pageIndex < this.pageCount() 
    ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
    : -1;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
}