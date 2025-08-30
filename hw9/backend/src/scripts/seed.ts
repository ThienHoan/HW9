import { databaseService } from '../services/database'

const sampleUsers = [
  {
    name: "Will Smith",
    email: "will.smith@example.com",
    phone: "0123456789",
    category: "Backend Engineer",
    is_active: true
  },
  {
    name: "Tom Hanks", 
    email: "tom.hanks@example.com",
    phone: "0123456790",
    category: "Software Engineer",
    is_active: true
  },
  {
    name: "Denzel Washington",
    email: "denzel.washington@example.com", 
    phone: "0123456791",
    category: "Software Engineer",
    is_active: true
  },
  {
    name: "Sylvester Stallone",
    email: "sylvester.stallone@example.com",
    phone: "0123456792", 
    category: "DevOps Engineer",
    is_active: true
  },
  {
    name: "Angelina Jolie",
    email: "angelina.jolie@example.com",
    phone: "0123456793",
    category: "Backend Engineer", 
    is_active: true
  },
  {
    name: "Leonardo DiCaprio",
    email: "leonardo.dicaprio@example.com",
    phone: "0123456794",
    category: "Frontend Engineer",
    is_active: true
  },
  {
    name: "Kate Winslet",
    email: "kate.winslet@example.com",
    phone: "0123456795", 
    category: "Software Engineer",
    is_active: false
  },
  {
    name: "Bruce Willis",
    email: "bruce.willis@example.com",
    phone: "0123456796",
    category: "Full Stack Engineer",
    is_active: true
  }
]

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...')
    
    // Initialize database first
    await databaseService.initializeDatabase()
    
    // Check if users already exist
    const existingUsers = await databaseService.getAllUsers()
    if (existingUsers.length > 0) {
      console.log(`📊 Database already has ${existingUsers.length} users. Skipping seed.`)
      return
    }
    
    // Insert sample users
    console.log('📝 Inserting sample users...')
    let successCount = 0
    
    for (const user of sampleUsers) {
      try {
        await databaseService.createUser(user)
        successCount++
        console.log(`✅ Created user: ${user.name}`)
      } catch (error) {
        console.error(`❌ Failed to create ${user.name}:`, error)
      }
    }
    
    console.log(`\n🎉 Seeding completed! ${successCount}/${sampleUsers.length} users created.`)
    
    // Display all users
    const allUsers = await databaseService.getAllUsers()
    console.log('\n📋 Current users in database:')
    allUsers.forEach(user => {
      console.log(`  • ${user.name} (${user.email}) - ${user.category} - ${user.is_active ? 'Active' : 'Inactive'}`)
    })
    
  } catch (error) {
    console.error('❌ Seeding failed:', error)
  } finally {
    await databaseService.disconnect()
    process.exit(0)
  }
}

// Run seeding
seedDatabase()
