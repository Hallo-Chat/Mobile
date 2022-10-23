package nhom1.cnm.hallochat.view;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import nhom1.cnm.hallochat.R;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }
    public void loginToMain(View view) {
        startActivity(new Intent(LoginActivity.this, MainActivity.class));
    }
}