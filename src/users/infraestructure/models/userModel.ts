import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
    tableName: 'users',
    timestamps: true 
})
class UserModel extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;
    
    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public name!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public last_name!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public email!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public password!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public phone!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    public status!: boolean;
    


}

export default UserModel;
