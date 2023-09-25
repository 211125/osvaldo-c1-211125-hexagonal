import { Model, DataType, Table, Column } from 'sequelize-typescript';

@Table({
    tableName: 'books',
    timestamps: true 
})
class BookModel extends Model {
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
    public title!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public author!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public code!: string;
    
    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public url!: string;

    @Column({
        type: DataType.STRING(128),
        allowNull: false
    })
    public status!: string;

    


}

export default BookModel;
