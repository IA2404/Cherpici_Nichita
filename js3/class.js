//  Класс Item
class Item {
    constructor(name, weight, rarity) {
      this.name = name;
      this.weight = weight;
  
      const validRarities = ["common", "uncommon", "rare", "legendary"];
      this.rarity = validRarities.includes(rarity) ? rarity : "no such rarity";
    }
  
    getInfo() {
      return `name: ${this.name}\nweight: ${this.weight}\nrarity: ${this.rarity}\n`;
    }
  
    setWeight(newWeight) {
      this.weight = newWeight;
    }
  }
  
  // Класс Weapon, наследующий от Item
  class Weapon extends Item {
    constructor(name, weight, rarity, damage, durability) {
      super(name, weight, rarity); // Вызов конструктора родительского класса
      this.damage = damage;
  
      this.durability = (durability >= 0 && durability <= 100)
        ? durability
        : "no such durability";
    }
  
    getInfo() {
      return `${super.getInfo()}damage: ${this.damage}\ndurability: ${this.durability}\n`;
    }
  
    use() {
      if (this.durability > 0 && typeof this.durability === "number") {
        this.durability -= 10;
      }
    }
  
    repair() {
      if (typeof this.durability === "number") {
        this.durability = 100;
      }
    }
  }
  
  // Пример использования:
  const sword2 = new Item("Steel Sword", 3.5, "rare");
  console.log(sword2.getInfo());
  sword2.setWeight(4.0);
  console.log(sword2.getInfo());
  
  const bow2 = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
  console.log(bow2.getInfo());
  bow2.use();
  console.log(bow2.durability);  // Прочность уменьшена
  bow2.repair();
  console.log(bow2.durability);  // Прочность восстановлена