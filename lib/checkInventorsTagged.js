
/*
 *  @yamlSet is an array of objects [{'title': 'edgar-codd.md', yaml:[{location: 'America', tags: 'database gitbabel'}]}]
 */

const checkInventorsTagged = (yamlSet) => {
  // Helpful Debugger if you need to see data
  // console.log(yamlSet); 

  const gitBabelTaggedInventors = []
  /*
   * Implement your solution here to populate the `array
   * with strings of the inventor names
   */
  for(let obj of yamlSet){
  
    if(obj.yaml.tags.includes("gitbabel")){
      gitBabelTaggedInventors.push(obj.title); 
    }
}

  return gitBabelTaggedInventors
}

module.exports = checkInventorsTagged
