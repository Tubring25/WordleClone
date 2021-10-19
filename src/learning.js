/*
 * @Description:
 * @Date: 2021-10-19 14:40:26
 * @LastEditTime: 2021-10-19 14:46:58
 */

function SuperType() {
  this.prototype = true
}

SuperType.prototype.getSuperValue = function() {
  return this.prototype
}

function SubType() {
  this.subProperty = '12'
}

SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function() {
  return this.subProperty
}

SubType.prototype.getSuperValue = function() {
  return false
}

const instance = new SubType()

console.log(instance)
