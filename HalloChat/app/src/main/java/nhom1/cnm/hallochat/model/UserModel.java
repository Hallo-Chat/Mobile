package nhom1.cnm.hallochat.model;

public class UserModel {
    private int anhDaiDien;
    private String ten;
    private String trangThai;

    public UserModel() {
    }

    public UserModel(int anhDaiDien, String ten, String trangThai) {
        this.anhDaiDien = anhDaiDien;
        this.ten = ten;
        this.trangThai = trangThai;
    }

    public int getAnhDaiDien() {
        return anhDaiDien;
    }

    public void setAnhDaiDien(int anhDaiDien) {
        this.anhDaiDien = anhDaiDien;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }

    @Override
    public String toString() {
        return "UserModel{" +
                "anhDaiDien=" + anhDaiDien +
                ", ten='" + ten + '\'' +
                ", trangThai='" + trangThai + '\'' +
                '}';
    }
}
